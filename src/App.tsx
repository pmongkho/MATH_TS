import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MathCard from './components/MathCard';
import Stats from './components/Stats';

function App() {

  return (
    <div className='h-screen max-sm:h-full bg-gray-800 text-white overflow-hidden relative'>
      <Header/>
			<div className='h-screen flex items-center justify-center'>
				<div className='flex justify-evenly items-center'>
					<div className=' flex p-10 justify-evenly items-start max-sm:flex-wrap'>
            <MathCard />
            <Stats />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
