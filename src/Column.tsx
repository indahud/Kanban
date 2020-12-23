import React from "react"
import { ColumnContainer, ColumnTitle } from "./styles"

interface ColumnProps {
  text: string
}

export const Column = ({
  text,
  children
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <div>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
      </ColumnContainer>
    </div>
  )
}

// Column3.tsx
// import React from "react"
// import { ColumnContainer } from "./styles"

// interface ColumnProps {
//     text: string
// }

// export const Column = ({ text }: ColumnProps) => {
//     <ColumnContainer>
//         <ColumnTitle>{text}</ColumnTitle>
//     </ColumnContainer>
// }
