from django.apps import AppConfig
import tensorflow as tf
from django.conf import settings
import os



class FireDetectConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "fire_detect"
    MODEL_FILE = os.path.join(settings.MODELS, "checkpoint")
    model = tf.keras.models.load_model(MODEL_FILE)
