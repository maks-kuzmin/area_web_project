<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['string', 'required', 'max:255'],
            'body' => ['string', 'required', 'max:512'],
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Title field is required',
            'title.string' => 'Title field is string',
            'body.required' => 'Body field is required',
            'body.string' => 'Body field is string',
        ];
    }
}
