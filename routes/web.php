<?php

use App\Http\Controllers\DashController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('/settingweb', [DashController::class, 'store'])->name('Webs.store');
Route::get('/dashboard', [DashController::class, 'index'])->name('dashboard');
Route::get('/', [DashController::class, 'Home']);

Route::get('/api/warna', [DashController::class, 'WarnaCss']);
Route::get('/api/title', [DashController::class,'Title']);


require __DIR__.'/auth.php';
