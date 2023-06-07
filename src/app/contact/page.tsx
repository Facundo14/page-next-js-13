import AddressIcon from "@/components/icons/AddressIcon";
import WhatsaapIcon from "@/components/icons/WhatsaapIcon";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="animate__animated animate__fadeIn">
            {/* <!-- Container for demo purpose --> */}
            <div className="container my-24 mx-auto md:px-6">
                {/* <!-- Section: Design Block --> */}
                <section className="mb-32">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold">Contáctanos</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <form>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text"
                                        className="block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput90" placeholder="Name" />
                                    <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Nombre
                                    </label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email"
                                        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleInput91" placeholder="Email address" />
                                    <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Email
                                    </label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea
                                        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlTextarea1" placeholder="Your message"></textarea>
                                    <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Mensaje</label>
                                </div>
                                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                    <input
                                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox" value="" id="exampleCheck96" />
                                    <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                                        Envíame una copia de este mensaje
                                    </label>
                                </div>
                                <button type="button"
                                    className="mb-6 inline-block w-full rounded bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    Enviar
                                </button>
                            </form>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block dark:bg-white text-black rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">
                                                Teléfono
                                            </p>
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                +54 376 5300783
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block dark:bg-white text-black rounded-md bg-primary-100 p-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold dark:text-white">Correo</p>
                                            
                                            <p className="text-neutral-500 dark:text-neutral-200">
                                                informatteosistemas@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <Link target="_blank" href="https://api.whatsapp.com/send?phone=%2B543765300783&text=">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block dark:bg-white rounded-md bg-primary-100 p-4 text-primary">
                                                    <WhatsaapIcon height="2rem" />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold dark:text-white">WhatsApp</p>
                                                
                                                <p className="text-neutral-500 dark:text-neutral-200">
                                                        +54 376 5300783
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <Link target="_blank" href={`https://goo.gl/maps/zjdd2kosVFhZctbC8`} >
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block dark:bg-white rounded-md bg-primary-100 p-4 text-primary">
                                                    <AddressIcon height="2rem" />
                                                </div>
                                            </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold dark:text-white">Dirección</p>
                                                    
                                                    <p className="text-neutral-500 dark:text-neutral-200">
                                                        San Luis 1529, Posadas, Misiones
                                                    </p>
                                                </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Section: Design Block --> */}
            </div>
            {/* <!-- Container for demo purpose --> */}
        </section>
    )
}