import React from 'react';
import CircularProgress from './CircularProgress';
interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  const segments = [
    { 
      color: '#01A3D4', 
      percentage: 15,
      title: 'SNS Venture Capital & Investment',
      description: 'Strategic investment opportunities and financial solutions for growing businesses'
    },
    { 
      color: '#EB510B', 
      percentage: 15,
      title: 'SNS Square Technologies',
      description: 'Cutting-edge technology solutions and digital transformation services'
    },
    { 
      color: '#E10485', 
      percentage: 15,
      title: 'SNS Innovation Hub',
      description: 'Fostering innovation and entrepreneurship through collaborative spaces'
    },
    { 
      color: '#B0D402', 
      percentage: 15,
      title: 'SNS Institutions',
      description: 'Quality education and professional development programs'
    },
    { 
      color: '#DE2A1B', 
      percentage: 15,
      title: 'SNS Spine',
      description: 'Advanced healthcare solutions and medical services'
    }
  ];
  return (
    <div className={`relative inline-block ${className}`} style={{ width: '420px' }}>
      <CircularProgress segments={segments} size="440px" />
      <div className="absolute   inset-0 flex items-center justify-center">
        <div className=" rounded-full w-[77%] h-[75%] flex items-center justify-center">
          <div className="bg-yellow-400 border-[20px] rounded-full border-white w-[100%] h-[99%] flex flex-col items-center justify-center shadow-lg">
            <h2 className="text-black font-bold text-4xl md:text-5xl">
              SNS
            </h2>
            <p className="text-black text-center font-bold text-sm md:text-xl  leading-tight">
              Design Thinking<br />Consultancy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};