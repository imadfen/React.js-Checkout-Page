import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailIcon from './icon components/EmailIcon';
import PhoneIcon from './icon components/PhoneIcon';
import UserIcon from './icon components/UserIcon';
import HomeIcon from './icon components/HomeIcon';
import CityIcon from './icon components/CityIcon';
import CountryIcon from './icon components/CountryIcon';
import MailboxIcon from './icon components/MailboxIcon';
import UserInfoSave from '../utils/UserInfoSave.class';
import SuccessDialog from "./SuccessDialog";


const userInfoSave = new UserInfoSave("user-info")

function FormSection() {
    const [openDialog, setOpenDialog] = useState(false)

    const initialValues = {
        email: "",
        phone: "",
        name: "",
        address: "",
        city: "",
        country: "",
        postalcode: "",
        saveinfo: false,
    }
    const countries = [
        "Algeria",
        "Argentina",
        "Australia",
        "Brazil",
        "Canada",
        "China",
        "Egypt",
        "France",
        "Germany",
        "India",
        "Italy",
        "Japan",
        "Mexico",
        "Russia",
        "South Korea",
        "Spain",
        "United Kingdom",
        "United States"
    ];


    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().matches(/^\d+$/, 'Invalid phone number').required('Phone is required'),
        name: Yup.string().required('Name is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        country: Yup.string().required('Country is required'),
        postalcode: Yup.string().matches(/^\d+$/, 'Invalid poste code').required('Poste code is required'),
        saveinfo: Yup.bool()
    });

    const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (x: boolean) => void }) => {
        setSubmitting(true)
        if (values.saveinfo) {
            userInfoSave.saveData(values)
        } else {
            userInfoSave.deleteSavedData()
        }

        setOpenDialog(true)
        setSubmitting(false)
    }

    const fieldsClasses = "block flex-1 min-h-[56px] border-0 bg-transparent py-1.5 pl-1 text-xs md:text-base text-[#333333] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none overflow-x-hidden"
    return (
        <div className="w-full min-h-full flex justify-center">
            <Formik
                initialValues={userInfoSave.getSavedData() ? userInfoSave.getSavedData() : initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col items-center md:block w-fit">
                        <p className='text-lg text-[#333333]'>Contact infomation</p>

                        {/* ================ email ================= */}
                        <div className='my-2 w-full'>
                            <label htmlFor="email" className='text-[#4f4f4f] text-sm'>E-mail</label>
                            <div className="flex w-full rounded-xl shadow-sm ring-1 ring-inset ring-[#828282] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f2994a]">
                                <span className="flex select-none items-center px-1 sm:px-2 md:px-3">
                                    <EmailIcon fill='#828282' />
                                </span>
                                <Field type="text" id="email" name="email" className="block flex-1 min-h-[56px] border-0 bg-transparent py-1.5 pl-1 text-xs md:text-base text-[#333333] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none" placeholder="Enter your email..." />
                            </div>
                            <span className="text-xs text-red-500">
                                <ErrorMessage name="email" component="div" />
                            </span>
                        </div>

                        {/* ================ phone ================= */}
                        <div className='my-2 w-full'>
                            <label htmlFor="phone" className='text-[#4f4f4f] text-sm'>Phone</label>
                            <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-[#828282] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f2994a]">
                                <span className="flex select-none items-center px-1 sm:px-2 md:px-3">
                                    <PhoneIcon fill='#828282' />
                                </span>
                                <Field type="phone" id="phone" name="phone" className={`${fieldsClasses}`} placeholder="Enter your phone..." />
                            </div>
                            <span className="text-xs text-red-500">
                                <ErrorMessage name="phone" component="div" />
                            </span>
                        </div>


                        <p className='text-lg text-[#333333] mt-14'>Contact infomation</p>

                        {/* ================ full name ================= */}
                        <div className='my-2 w-full'>
                            <label htmlFor="name" className='text-[#4f4f4f] text-sm'>Full name</label>
                            <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-[#828282] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f2994a]">
                                <span className="flex select-none items-center px-1 sm:px-2 md:px-3">
                                    <UserIcon fill='#828282' />
                                </span>
                                <Field type="text" id="name" name="name" className={`${fieldsClasses}`} placeholder="Your full name..." />
                            </div>
                            <span className="text-xs text-red-500">
                                <ErrorMessage name="name" component="div" />
                            </span>
                        </div>

                        {/* ================ address ================= */}
                        <div className='my-2 w-full'>
                            <label htmlFor="address" className='text-[#4f4f4f] text-sm'>Address</label>
                            <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-[#828282] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f2994a]">
                                <span className="flex select-none items-center px-1 sm:px-2 md:px-3">
                                    <HomeIcon fill='#828282' />
                                </span>
                                <Field type="text" id="address" name="address" className={`${fieldsClasses}`} placeholder="Your address..." />
                            </div>
                            <span className="text-xs text-red-500">
                                <ErrorMessage name="address" component="div" />
                            </span>
                        </div>

                        {/* ================ city ================= */}
                        <div className='my-2 w-full'>
                            <label htmlFor="city" className='text-[#4f4f4f] text-sm'>City</label>
                            <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-[#828282] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f2994a]">
                                <span className="flex select-none items-center px-1 sm:px-2 md:px-3">
                                    <CityIcon fill='#828282' />
                                </span>
                                <Field type="text" id="city" name="city" className={`${fieldsClasses}`} placeholder="Your city..." />
                            </div>
                            <span className="text-xs text-red-500">
                                <ErrorMessage name="city" component="div" />
                            </span>
                        </div>

                        <div className='grid grid-cols-2 gap-7'>
                            {/* ================ country ================= */}
                            <div className='my-2'>
                                <label htmlFor="country" className='text-[#4f4f4f] text-sm'>Country</label>
                                <div className="flex pr-5 md:pr-3 rounded-xl shadow-sm ring-1 ring-inset ring-[#828282] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f2994a]">
                                    <span className="flex select-none items-center px-1 sm:px-2 md:px-3">
                                        <CountryIcon fill='#828282' />
                                    </span>
                                    <Field as="select" id="country" name="country" className={`${fieldsClasses}`}>
                                        <option defaultChecked value="" disabled>Your country</option>

                                        {countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <span className="text-xs text-red-500">
                                    <ErrorMessage name="country" component="div" />
                                </span>
                            </div>

                            {/* ================ postal code ================= */}
                            <div className='my-2'>
                                <label htmlFor="postalcode" className='text-[#4f4f4f] text-sm'>Postal code</label>
                                <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-[#828282] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f2994a]">
                                    <span className="flex select-none items-center px-1 sm:px-2 md:px-3">
                                        <MailboxIcon fill='#828282' />
                                    </span>
                                    <Field type="text" id="postalcode" name="postalcode" className={`${fieldsClasses}`} placeholder="Your postal code..." />
                                </div>
                                <span className="text-xs text-red-500">
                                    <ErrorMessage name="postalcode" component="div" />
                                </span>
                            </div>
                        </div>

                        {/* ================ save info ================= */}
                        <div className='my-2 w-fit'>
                            <label htmlFor="saveinfo" className='text-[#4f4f4f] text-sm flex gap-4'>
                                <Field type="checkbox" id="saveinfo" name="saveinfo" className="block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none" />
                                <p>Save this information for next time</p>
                            </label>
                        </div>


                        <div className='w-full mt-5 flex justify-end'>
                            <button type="submit" disabled={isSubmitting} className='bg-[#f2994a]'>
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

            <SuccessDialog isOpen={openDialog} onClose={() => setOpenDialog(false)} />

        </div>
    )
}

export default FormSection