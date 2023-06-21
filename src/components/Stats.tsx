import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {selectCorrect, selectDiv, selectMinus, selectMult, selectPlus} from '../redux/features/counterSlice'

function Stats() {
    const correct = useSelector(selectCorrect)
    const multi = useSelector(selectMult)
    const div = useSelector(selectDiv)
    const plus = useSelector(selectPlus)
    const minus = useSelector(selectMinus)
console.log(correct, multi, div, plus, minus)

    
	return (
		<div className=' text-3xl p-10 max-sm:text-2xl'>
			<div className='text-center font-bold underline'>Stats</div>
			<div className=' [&>div]:m-1'>
				<div className=' text-purple-500'>Multiplication: {multi}</div>
				<div className=' text-yellow-300'>Division: {div}</div>
				<div className='text-blue-700'>Addition: {plus}</div>
				<div className=' text-orange-400'>Subtraction: {minus}</div>
				<div className=' outline font-bold bg-green-500 p-2'>Total Correct: {correct}</div>
			</div>
		</div>
	)
}

export default Stats
