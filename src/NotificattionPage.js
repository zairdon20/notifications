import React from 'react'
import  Names, { names }  from './Names';
import images from './images/avatar-mark-webber.webp'
import UnreadDot from './UnreadDot';



function NotificattionPage() {
   
    const modifiedNames = names.map((item, index) => {
        // Modify each name by adding " - modified" to the end
        const modifiedName = `${item.name} `;
        return <li key={index}>{modifiedName}</li>;
      });
    return (
        
        <div className=''>
        
        <ul className='flex bg-gray-200 m-2 border-b-6  border-y-8 mt-6  space-x-1 mr-2'><img src={images} className='w-8 h-8 ml-2' alt="icon" /><li className='font-bold text-blue-500 flex-col'>{modifiedNames[0]}</li><p className='text-base'>reacted to your recent post <strong>My first tournament today!<UnreadDot /></strong></p>
        </ul> 
        <ul className='flex space-x-2'><li className='font-bold'>{modifiedNames[1]}</li> <p className='text-sm py-1 '>followed you</p></ul>
        <ul className='flex space-x-2'><li className='font-bold'>{modifiedNames[2]}reacted </li><p className='text-sm py-1 '>has joined your group Chess club</p> </ul>
        <ul className='flex space-x-2'><li className='font-bold'>{modifiedNames[3]}reacted </li><p className='text-sm py-1 '>reacted</p> </ul>
        <ul className='flex space-x-2'><li className='font-bold'>{modifiedNames[4]}reacted </li> <p className='text-sm py-1 '>reacted</p></ul>
        <ul className='flex space-x-2'><li className='font-bold'>{modifiedNames[5]}reacted </li> <p className='text-sm py-1 '>reacted</p></ul>
        <ul className='flex space-x-2'><li className='font-bold'>{modifiedNames[6]}reacted </li> <p className='text-sm py-1 '>reacted</p></ul>
        
      </div>
    );
  }
  
  export default NotificattionPage;