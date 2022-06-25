from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser
import cloudinary.uploader
from fire_detect.apps import FireDetectConfig
from fire_detect.model_utils import predict


class UploadPredictView(APIView):
    parser_classes = (
        MultiPartParser,
        JSONParser,
    )

    @staticmethod
    def post(request):
        file = request.data.get("image")
        upload_data = cloudinary.uploader.upload(file)
        # print(upload_data)
        img = upload_data["url"]
        model = FireDetectConfig.model

        predicted_class = predict(img, model)

        return Response(
            {
                "status": "success",
                "data": upload_data,
                "url": img,
                "predicted_class": predicted_class,
            },
            status=201,
        )


# Create your views here.
