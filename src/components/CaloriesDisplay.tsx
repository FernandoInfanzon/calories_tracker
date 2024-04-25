
type CaloriesDisplayProps = {
    calories: number,
    text: string,
    textColor: string
}

export default function CaloriesDisplay({calories, text, textColor} : CaloriesDisplayProps) {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        <span className={`font-black text-6xl text-${textColor}`}>{calories}</span>
        <span className="text-xl">{text}</span>
    </p>
  )
}
