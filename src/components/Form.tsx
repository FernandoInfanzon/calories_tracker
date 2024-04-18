import { useState, ChangeEvent } from 'react'
import {categories} from '../data/categories'

export default function Form() {
    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    }
 
    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className='font-bold'>Category:</label>
                <select 
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category  => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className='font-bold'>Activity:</label>
                <input type="text" id='name' className='border border-slate-300 p-2 rounded-lg' placeholder='e.g. food, orange juice, salad, workout, bike, walk'
                value={activity.name}
                onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calory" className='font-bold'>Calory:</label>
                <input type="number" id='calory' className='border border-slate-300 p-2 rounded-lg' placeholder='Calory, e.g. 800'
                value={activity.calories}
                onChange={handleChange} />
            </div>

            <input type="submit" className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white' value='Save Food or Activity' />

        </form>
    )
}
