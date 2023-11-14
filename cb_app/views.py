from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def courses(request):
    return render(request, 'courses.html')

def contact_us(request):
    return render(request, 'contact_us.html')

def sign_up(request):
    return render(request, 'auth/sign_up.html')

def login(request):
    return render(request, 'auth/login.html')

def python(request):
    return render(request, 'courses/python.html')