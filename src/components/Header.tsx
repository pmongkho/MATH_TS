import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSymbol, setSymbol } from '../redux/features/symbolSlice'

function Header() {
	const [sign, setSign] = useState('x')
	const symbol = useSelector(selectSymbol)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setSymbol(sign))
	}, [sign])

	return (
		<>
			<ul className=' absolute bottom-0 mx-[30%] flex justify-center items-center p-10  text-5xl [&>li]:mx-4 [&>li:hover]:bg-[#ffffff55] [&>li]:cursor-pointer [&>li]:bg-[#ffffff17] max-sm:px-5'>
				<li
					className=' p-10 mt-2 rounded-xl max-sm:p-4'
					value='x'
					onClick={() => setSign('x')}
				>
					x
				</li>
				<li
					className=' p-10 mt-2 rounded-xl max-sm:p-4'
					value='÷'
					onClick={() => setSign('÷')}
				>
					÷
				</li>
				<li
					className=' p-10 mt-2 rounded-xl max-sm:p-4'
					value='+'
					onClick={() => setSign('+')}
				>
					+
				</li>
				<li
					className=' p-10 mt-2 rounded-xl max-sm:p-4'
					value='-'
					onClick={() => setSign('-')}
				>
					-
				</li>
			</ul>
		</>
	)
}

export default Header
