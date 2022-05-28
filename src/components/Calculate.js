import React from 'react'
import Swal from 'sweetalert2'

import { Table } from './Table'
const nerdamer = require("nerdamer/all.min")


export const Calculate = () => {
  const handleClick = (e) => {

    Swal.fire({
      title: 'Good job!',
      text: 'Button Clicked!',
      icon: 'error',
      timer: 1500
    }

    )
  }

  const handleClickRefresh = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu archivo ha sido eliminado!',
          'success'
        )
      }
    })
  }

  return (
    <div className='pt-6'>

      <div className='text-2xl font-semibold text-center pt-8'>Calculate</div>

      <form className='sm:grid grid-cols-2 sm:gap-4 bg-gray-50 container mx-auto p-4 border-2 border-neutral-200 rounded-md mt-4 mb-8'>

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite la funcion
          <br />
          <input type="text"
            name='function'
            className="w-72 sm:w-72 border-2 border-neutral-300 rounded w-1/5"
          />

        </div>

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite el valor inicial
          <br />
          <input type="text"
            name='initialValue'
            className="w-72  sm:w-72 border-2 border-neutral-300 rounded w-1/5"
          />
        </div>

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite la tolerancia
          <br />
          <input type="text"
            name='tolerancia'
            className="w-72 sm:w-72 border-2 border-neutral-300 rounded w-1/5"
          />
        </div>

        <div className='italic text-xl text-center pt-6 pr-8 whitespace-pre'>
          Digite la cantidad de iteraciones
          <br />
          <input type="text"
            name='iterations'
            className="w-72  sm:w-72 border-2 border-neutral-300 rounded w-1/5"
          />
        </div>

      </form>

      <div className='flex justify-center pt-8'>

        <button
          className='bg-blue-600 hover:bg-blue-400 border-2 text-white rounded-lg pl-3 pr-3 pt-1 pb-1 mr-20'
        >
          Calculate
        </button>

        <button
          className='bg-green-700 hover:bg-green-400 border-2 text-white rounded-lg pl-3 pr-3 pt-1 pb-1 mr-12'
          onClick={handleClickRefresh}
        >
          refresh
        </button>
      </div>

      <div class='viasually-hidden'>
      <Table />
      </div>
      


    </div>
  )
}
