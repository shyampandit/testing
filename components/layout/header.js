import React from "react";
import {navLinks} from "../utils/data";
import Link from "next/link";

export default function Header(){
       return (
              <header>
                <div className="brand">
                    <h3>Example</h3>
                </div>
                <nav className="navbar">
                <ul>
                    {
                        navLinks.map((link,index) =>{
                          return (
                               
                                <Link href={link.path}>
                                    <li key={index}>{link.name}</li>
                                </Link>
                              
                          )


                        })
                    }
                     </ul>
                </nav>
              </header>
       )





}