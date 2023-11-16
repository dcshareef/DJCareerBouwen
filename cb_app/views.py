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

def profile(request):
    return render(request, 'auth/profile.html')

def editProfile(request):
    return render(request, 'auth/editProfile.html')

def admin(request):
    return render(request, 'admin/adminLogin.html')

def jobPost(request):
    return render(request, 'admin/jobPost.html')

def usersList(request):
    return render(request, 'admin/usersList.html')