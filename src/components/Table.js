import React from 'react'
import { methods } from '../logic/methods'
export const Table = () => {
    const [calculateXDerivate] = methods();
    const jsontable = {
        "table": calculateXDerivate('x^5-3x^4+4x^3+4x-10', 1.5, 10)
    }
    jsontable.table.x.pop();
    const itemX = jsontable.table.x.map((num) =>
        <div>{num}</div>
    );
    const itemFx = jsontable.table['f(x)'].map((num) =>
        <div>{num}</div>
    );
    const itemF_x = jsontable.table['f_(x)'].map((num) =>
        <div>{num}</div>
    );
    const iteracion = jsontable.table.ite.map((num) => 
        <div>{num}</div>

    );

    return (
        <>
            <table class="table">
                <thead>
                    <tr >
                        <th scope="col">Iteraciones</th>
                        <th scope="col">Xn</th>
                        <th scope="col">f(x)</th>
                        <th scope="col">f`(x)</th>
                        <th scope="col">EE</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td > {iteracion}</td>
                        <td>{itemX}</td>
                        <td>{itemFx}</td>
                        <td>{itemF_x}</td>
                        <td>Bryan gay</td>
                    </tr>
                </tbody>
            </table>

        </>

    )
}
