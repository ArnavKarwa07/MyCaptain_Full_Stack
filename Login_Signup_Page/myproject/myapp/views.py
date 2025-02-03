from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponse
from .forms import LoginForm
# Create your views here.
def login_action(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user:
                login(request, user)
                return redirect('welcome')
            else:
                return redirect('error')
        else:
            return HttpResponse("Failed to save data.")
    else:
        form = LoginForm()
        return render(request, 'myapp/login.html', {'form': form})
def logout_action(request):
    logout(request)
    return redirect('login')
def welcome(request):
    return render(request, 'myapp/welcome.html')
def error(request):
    return render(request, 'myapp/error.html')