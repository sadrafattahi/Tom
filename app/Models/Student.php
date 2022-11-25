<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'family'];
    public function books()
    {
        return $this->hasMany(Book::class, 'stu_id');
    }
}
