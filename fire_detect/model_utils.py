import tensorflow as tf
import tensorflow_io as tfio
import requests
import numpy as np

CLASS_NAME = ["Cloud", "Dust", "Haze", "Land", "Seaside", "Smoke"]


def _pre_process_image(response):
    img = tfio.experimental.image.decode_tiff(response)
    img = tf.image.resize(img, [224, 224])
    return img[:, :, 0:3] / 255


def _decode_class(one_hot):
    index = np.argmax(one_hot)
    return CLASS_NAME[index]


def predict(url, model):
    response = requests.get(url)
    image_pred = _pre_process_image(response.content)
    predicted = _decode_class(model.predict(image_pred[np.newaxis, ...]))
    return predicted
