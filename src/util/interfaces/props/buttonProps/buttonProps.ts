import React from "react";

export interface ButtonProps {

  buttonText: React.ReactNode;
  classname?: string;
  disabled?: boolean;
  onClick?: (e: React.FormEvent) => Promise<void> | void;
  type?: "button" | "submit" | "reset"; 
  
}
