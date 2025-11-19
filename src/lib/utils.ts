
import {type FetchBaseQueryError} from "@reduxjs/toolkit/query";
import { type IApiResponse } from "../../interfaces.ts";
import {type FieldValues, type Path, type UseFormSetError} from "react-hook-form";
/*
Response transformer for remove that inner data objects...
 */
export function responseErrorTransformer(response: FetchBaseQueryError) : IApiResponse<void> | unknown{
    if(response.data instanceof Object && 'status' in response.data){
        return response.data as IApiResponse<void>;
    }else{
        return response.data;
    }
}
/*
Function for validate if a error is given by the backend
  EXAMPLE:
  catch(error : unknown){
    HERE WE KNOW IF A BACKEND ERROR BECAUSE THE ERROR CONTAINS A DATA
    So all you need to do is cast IApiResponse<void> (Thats because we know that is a error given from our backend)
    if(isApiError(error)){
      const errors = (error as IApiResponse<void>).errors;
      HERE ALL OF YOUR LOGIC TO SET UP THE ERROR
      (Strongly recommended)
      applyErrors<TypeOfBodyWhereAreTheKeys>(setError, errors)
      return;
    }
  }
 */
export function isApiError(data : unknown) : IApiResponse<void> | boolean{
    if(!data) return false;
    return data instanceof Object && 'status' in data;
}

/*
* This functions apply manually react hook form errors
* Receive thes setError react hook form method func and errors object
* <==== IMPORTANT ====> USEFUL WHEN HANDLING CUSTOM BACKEND ERRORS <==== IMPORTANT ====>
*
* ITERATE OVER ALL ERRORS AND SET THE ERROR BY KEY - VALUE
* KEY (Field error) = name
* VALUE (Error message) = "Must be a valid name"
*
* EXAMPLE:
* interface IUser = {
*   name : string
* }
* const methods = useForm<IUser>()
* const { setError, errors } = methods
* const errorsObject : {
*   name (KEY): "Must be a valid name" (VALUE)
* } - Custom anonymous object error given from backend or given by a custom function...
*
* applyErrors<IUser>(setError, errors)
*
* RESULT:
* errors.name.message = "Must be a valid name"
* <p>errors.name.message</p> - "Must be a valid name"
* BONUS TIP:
* We use the `IUser` type in the auth because our backend returned an error
* for the field `name`, and that field exists in `IUser`.
* So the keys from the backend must align with the field names in your form schema.
* */
export function applyErrors<
    TBody extends FieldValues
>(setError : UseFormSetError<TBody>,
  errors: Record<string, string> | undefined
){
    if(!errors) return;
    for(const e in errors){
        setError(e as Path<TBody>, {
            message: errors[e]
        })
    }
}

export function maskText(text : string, mask: string, separator: string) : string | null{
    if(!text || text.trim() === ""){
        console.error("You should never pass a empty string")
        return null;
    }
    const parts = text.split(separator)
    if(parts.length < 2){
        console.error("There is no separator inside the text!")
        return null
    }
    const [local, direction] = text.split(separator);
    const times = local.length - 3;
    if(times <= 0){
        console.error("Text is too short to mask")
        return text;
    }
    return local.slice(0, 3) + mask.repeat(times) + separator + direction;
}

export function getCookie(name: string) {
    const value = `; ${document.cookie}`;  // le agregamos un ; para evitar problemas si está al inicio
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return parts?.pop().split(';').shift();
    }
    return null; // si no existe la cookie
}