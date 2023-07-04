import {useForm} from "react-hook-form";
import './index.css'

export default function App() {
  const {register, handleSubmit} = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className='absolute'>
      <div className='hat'>
        <div className='form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstname')} placeholder='Kirill' />
            <input {...register('secondname')} placeholder='Korzhov' />
            <input {...register('surname')} placeholder='Denisovich' />
            <input {...register('year')} placeholder='31.05.2005' />
            <input {...register('number')} placeholder='+996 555-38-71-03' />
            <input {...register('email')} placeholder='my@gmail.com' />
            <select {...register("gendar")}>
              <option value="">Select...</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <input type="submit" value='Send'/>
          </form>
        </div>
      </div>
    </div>
  )
}