from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('courses', views.courses, name='courses'),
    path('contact_us', views.contact_us, name='contact_us'),
    path('sign_up', views.sign_up, name='sign_up'),
    path('login', views.login, name='login'),
    path('python', views.python, name='python'),
]
