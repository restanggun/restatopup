<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Webs;
use Inertia\Inertia;

class DashController extends Controller
{
    public function index() {
        $webNama = Webs::find(1);
        return Inertia::render("Dashboard", [
            "NamaWebnya"=> $webNama ? $webNama->name : "RestaTopup",
            "Logonya"=> $webNama ? $webNama->urlLogo : "https://i.ibb.co.com/GW6QGLX/restaicon.png",
            "Warna1nya"=> $webNama ? $webNama->warna1 : "#00A8FF",
            "Warna2nya"=> $webNama ? $webNama->warna2 : "#0085FF",
        ]);
    }

    public function Title() {
        $Title = Webs::find(1);
        return response()->json($Title->name);
    }

    public function Home() {
        $webNama = Webs::find(1);
        return Inertia::render("Home", [
            "NamaWebnya"=> $webNama ? $webNama->name : "RestaTopup",
            "Logonya"=> $webNama ? $webNama->urlLogo : "https://i.ibb.co.com/GW6QGLX/restaicon.png",
        ]);
    }

    public function WarnaCss() {
        $warna = Webs::find(1);

        $css = "
            :root {
                --warna1: {$warna->warna1};
                --warna2: {$warna->warna2};
            }
        ";

        return response($css, 200)->header("Content-Type","text/css");
    }

    public function store(Request $request) {
        $request->validate([
            "NamaWeb"=> "required|string|max:25",
            "urlLogo"=> "required|string|max:255",
            "warna1"=> "required|string|max:7",
            "warna2"=> "required|string|max:7",
        ]);

        Webs::updateOrCreate(
            ["id" => 1],
            [
                "name"=> $request->NamaWeb,
                "urlLogo"=> $request->urlLogo,
                "warna1"=> $request->warna1,
                "warna2"=> $request->warna2,
                ]
        );

        return redirect()->back()->with("success","Nama Website Berhasil Disimpan.");
    }
}
