<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('webs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('urlLogo');
            $table->string('warna1');
            $table->string('warna2');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::table('webs', function (Blueprint $table) {
            $table->dropColumn(['name', 'urlLogo', 'warna1', 'warna2']);
        });
    }
};
