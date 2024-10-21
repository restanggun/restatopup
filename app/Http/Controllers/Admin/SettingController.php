<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia; // Pastikan Inertia di-import

class SettingController extends Controller
{
    // Menampilkan pengaturan
    public function index()
    {
        $setting = Setting::first(); // Ambil pengaturan pertama dari database
        return Inertia::render('Dashboard', [
            'setting' => $setting,
        ]);
    }

    // Mengupdate pengaturan
    public function update(Request $request)
    {
        $request->validate([
            'nama_website' => 'required|string|max:255',
        ]);

        $setting = Setting::first(); // Ambil pengaturan pertama
        $setting->update([
            'nama_website' => $request->nama_website,
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Pengaturan berhasil diperbarui!');
    }
}
