import { Activity } from "../types"
import { useMemo } from "react"
import CaloriesDisplay from "./CaloriesDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

    const caloriesConsumed = useMemo( ()=> activities.reduce(
        (total, activity) => activity.category === 1 ? total + activity.calories : total, 0
    ) , [activities])

    const caloriesBurned = useMemo( ()=> activities.reduce(
        (total, activity) => activity.category === 2 ? total + activity.calories : total, 0
    ) , [activities])

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Calories Summary</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 px-3">
            <CaloriesDisplay calories={caloriesConsumed} text='Calories consumed' textColor="lime-500" />

            <CaloriesDisplay calories={caloriesBurned} text='Calories Burned' textColor="orange-500" />

            <CaloriesDisplay calories={caloriesConsumed - caloriesBurned} text='Total Calories' textColor="orange-50" />
        </div>
        
    </>
  )
}
