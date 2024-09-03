'use client';

import Image from "next/image";
import { Card } from "antd";
import React from "react";

export default function Home(): JSX.Element {
  return (

    <div className="h-full p-4">
      <Card className="text-xl" title="Personagens principais">
        <Card.Grid className="w-1/3 flex flex-col justify-center items-center">
          <Image
            width={200}
            height={200}
            src="/Musa.png"
            alt="Descrição da imagem"
          />
          <div className="pt-8">
            <h1>Musa</h1>
          </div>
        </Card.Grid>
        <Card.Grid className="w-1/3 flex flex-col justify-center items-center">
          <Image
            width={200}
            height={200}
            src="/Bloom.png"
            alt="Descrição da imagem"
          />
          <div className="pt-20">
            <h1>Bloom</h1>
          </div>
        </Card.Grid>
        <Card.Grid className="w-1/3 flex flex-col justify-center items-center">
          <Image
            width={200}
            height={200}
            src="/Stella.png"
            alt="Descrição da imagem"
          />
          <div className="pt-8">
            <h1>Stella</h1>
          </div>
        </Card.Grid>
        <Card.Grid className="w-1/3 flex flex-col justify-center items-center">
          <Image
            width={200}
            height={200}
            src="/Aisha.png"
            alt="Descrição da imagem"
          />
          <div className="pt-8">
            <h1>Aisha</h1>
          </div>
        </Card.Grid>
        <Card.Grid className="w-1/3 flex flex-col justify-center items-center">
          <Image
            width={200}
            height={200}
            src="/Layla.png"
            alt="Descrição da imagem"
          />
          <div className="pt-8">
            <h1>Layla</h1>
          </div>
        </Card.Grid>
        <Card.Grid className="w-1/3 flex flex-col justify-center items-center">
          <Image
            width={200}
            height={200}
            src="/Tecna.png"
            alt="Descrição da imagem"
          />
          <div className="pt-8">
            <h1>Tecna</h1>
          </div>
        </Card.Grid>
      </Card>
    </div>
  );
}
