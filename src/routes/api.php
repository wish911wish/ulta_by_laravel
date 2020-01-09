<?php

use Illuminate\Http\Request;

Route::group([
    'namespace' => 'API',
    'middleware' => 'api'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::post('sign_up', 'AuthController@signUp');
});
