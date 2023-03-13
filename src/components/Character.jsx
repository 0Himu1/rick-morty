import React from 'react';

export default function Character({ character }) {
  const {
    name, status, species, gender, image, location,
  } = character;
  return (
    <div className="bg-gray-900 mx-auto max-w-sm rounded-sm p-4 mb-10">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover mx-auto w-full h-full rounded-sm"
        />
      </div>
      <div className="">
        <h1 className="text-4xl">{name}</h1>
        <p>{`Status: ${status}`}</p>
        <p>{`Species: ${species}`}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`last seen on: ${location.name}`}</p>
      </div>
    </div>
  );
}
