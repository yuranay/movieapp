<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    // public function user()
    // {
    //     return $this->belongsto(User::class);
    // }

    public function review()
    {
        return $this->belongsTo(Review::class);
    }
}
