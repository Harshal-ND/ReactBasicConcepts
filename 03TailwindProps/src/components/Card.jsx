import React from 'react'

const Card = ({name ="Indian Captain"}) => {

    // accepting props
    console.log(name);
    return (
        <>
            <h1 className='text-2xl bg-blue-500 p-3 rounded'>
                Card for Virat kohli

                
            </h1>
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.deccanherald.com/deccanherald%2F2024-03%2F51c56fa0-3fe6-4c5a-8bd2-21efe523a7a7%2FVirat_Kohli_Hairdo.jpg?rect=94%2C0%2C540%2C720" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, placeat.
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                            {name}
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Indian Cricketer
                        </div>
                    </figcaption>
                </div>
            </figure>
        </>
    )
}

export default Card