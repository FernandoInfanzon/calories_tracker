import { useState, ChangeEvent, FormEvent } from 'react'
import {categories} from '../data/categories'
import { Activity } from '../types'

export default function Form() {
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const {name, calories} = activity
        return name.trim() !== '' && calories > 0 && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={ handleSubmit}
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
                <label htmlFor="calories" className='font-bold'>Calory:</label>
                <input type="number" id='calories' className='border border-slate-300 p-2 rounded-lg' placeholder='Calory, e.g. 800'
                value={activity.calories}
                onChange={handleChange} />
            </div>

            <input type="submit" className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white disabled:bg-gray-200'
            value={`Save ${activity.category === 1 ? ' Food' : 'Workout'}`} 
            disabled={!isValidActivity()} />

        </form>
    )
}
