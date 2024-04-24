import { useMemo, Dispatch } from "react";
import {Activity} from "../types";
import { ActivityActions } from '../reducers/activity-reducer'
import { categories } from "../data/categories";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

type ActivityListProps = {
    activities: Activity[]
    dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({activities , dispatch}:ActivityListProps)  {
    const categoryName = useMemo( ()=> (category: Activity['category']) => 
        categories.map( cat => cat.id === category ? cat.name : '' )
     ,[activities])

  return (
    <>
        <h2 className="text-4xl font-bold text-slate-600 text-center">Food and Activities</h2>
        <p className="text-center text-slate-500">
            All activities and food you have consumed
        </p>
        {
            activities.length === 0 && <p className="text-center text-slate-500">No activities yet</p>
        }
        {
            activities.map( (activity) => (
                <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500' }`}>
                            {categoryName(+activity.category)}
                        </p>
                        <p className="text-2xl font-bold pt-5">
                            {activity.name}
                        </p>
                        <p className="font-black text-4xl text-lime-500">
                            <span>{activity.calories}</span>
                        </p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button onClick={ () => dispatch({type: "EDIT_ACTIVITY", payload: {id: activity.id}})}>
                            <PencilSquareIcon className="w-8 h-8 text-slate-500"/>
                        </button>
                    </div>
                </div>
            ))
        }
    </>
  )
}
