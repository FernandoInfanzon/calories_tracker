import {Activity} from "../types";

type ActivityListProps = {
    activities: Activity[]
}

export default function ActivityList({activities}:ActivityListProps)  {
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
                        <p>
                            {activity.category}
                        </p>
                        <p className="text-2xl font-bold pt-5">
                            {activity.name}
                        </p>
                        <p className="font-black text-4xl text-lime-500">
                            <span>{activity.calories}</span>
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            ))
        }
    </>
  )
}
