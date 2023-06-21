import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCorrect, addDiv, addMinus, addMulti, addPlus } from '../redux/features/counterSlice'
import { selectSymbol } from '../redux/features/symbolSlice'

function MathCard() {
	const [topNumber, setTopNumber] = useState(Math.floor(Math.random() * 10))
	const [bottomNumber, setBottomNumber] = useState(
		Math.floor(Math.random() * 10)
	)
	const [result, setResult] = useState('')
	const sign = useSelector(selectSymbol)
	const dispatch = useDispatch()
	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setResult(e.currentTarget.value)
	}

	useEffect(() => {
		let resultNumber: number = +result
		switch (sign.symbol) {
			case '+':
				if (topNumber + bottomNumber === resultNumber) {
					setTopNumber(Math.floor(Math.random() * 10))
					setBottomNumber(Math.floor(Math.random() * 10))
					dispatch(addCorrect())
					dispatch(addPlus())
					setResult('')
				}
				break
			case '-':
				if (topNumber - bottomNumber === resultNumber) {
					setTopNumber(Math.floor(Math.random() * 10))
					setBottomNumber(Math.floor(Math.random() * 10))
					dispatch(addCorrect())
					dispatch(addMinus())
					setResult('')
				}
				break
			case 'x':
				if (topNumber * bottomNumber === resultNumber) {
					setTopNumber(Math.floor(Math.random() * 10))
					setBottomNumber(Math.floor(Math.random() * 10))
					dispatch(addCorrect())
					dispatch(addMulti())
					setResult('')
				}
				break
			case '÷':
				if (topNumber / bottomNumber === resultNumber) {
					setTopNumber(Math.floor(Math.random() * 10))
					setBottomNumber(Math.floor(Math.random() * 10))
					dispatch(addCorrect())
					dispatch(addDiv())
					setResult('')
				}
				break

			default:
				break
		}

	}, [result])

	return (
		<>
			<div className='p-[80px] rounded-3xl bg-[#ffffff17] max-sm:p-[40px] '>
				<div className='flex items-center justify-center'>
					<div className='text-4xl'>{sign.symbol}</div>
					<div className='text-5xl p-[10px]'>
						<div className=''>{topNumber}</div>
						<div className=''>{bottomNumber}</div>
					</div>
				</div>
				<hr />
				<div className='flex justify-center text-5xl p-[16px] '>
					<input
						className=' py-4 border-box bg-[#ffffff17] border-none text-white text-center w-[150px] rounded-2xl'
						type='text'
						value={result}
						onChange={handleChange}
					/>
				</div>
			</div>
		</>
	)
}

export default MathCard
