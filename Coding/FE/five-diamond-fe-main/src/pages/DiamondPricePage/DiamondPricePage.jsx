import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Table } from 'react-bootstrap';
import "./DiamondPricePage.css";
import axios from 'axios';

export default function DiamondPricePage() {
    const [diamondPrices, setDiamondPrices] = useState([]);

    const fetchDiamondPrices = async () => {
        try {
            const response = await axios.get("https://6684dca756e7503d1ae169ba.mockapi.io/api/v1/DiamondPrice");
            console.log(response.data);
            setDiamondPrices(response.data);
        } catch (error) {
            console.error("Error fetching diamond prices:", error);
        }
    };

    useEffect(() => {
        fetchDiamondPrices();
    }, []);

    const columnHeaders = ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2'];
    const rowHeaders = ['D', 'E', 'F'];

    const renderTableCells = (size) => {
        return rowHeaders.map((color) => (
            <tr key={color}>
                <th>{color}</th>
                {columnHeaders.map((cut) => {
                    const priceData = diamondPrices.find(
                        (price) => price.size === size && price.cut === cut && price.color === color
                    );
                    return (
                        <td key={cut}>
                            {priceData ? `${priceData.price} VNĐ` : 'N/A'}
                        </td>
                    );
                })}
            </tr>
        ));
    };

    return (
        <div>
            <Header />
            <div className='body-pricepage'>
                <Container>
                    <h1 className='header-price'>Bảng giá kim cương kiểm định quốc tế hôm nay</h1>
                    <div>
                        <p className='price-title'>Giá Kim Cương 3ly6</p>
                        <Table bordered className='price-table'>
                            <thead>
                                <tr className='price-table-header-row'> {/* Add this class */}
                                    <th className='price-table-header'>Color / Clarity</th>
                                    {columnHeaders.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableCells("3.6")}
                            </tbody>
                        </Table>
                    </div>
                    <div>
                        <p className='price-title'>Giá Kim Cương 4ly1</p>
                        <Table bordered className='price-table'>
                            <thead>
                                <tr className='price-table-header-row'> {/* Add this class */}
                                    <th className='price-table-header'>Color / Clarity</th>
                                    {columnHeaders.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableCells("4.1")}
                            </tbody>
                        </Table>
                    </div>
                    <div>
                        <p className='price-title'>Giá Kim Cương 4ly5</p>
                        <Table bordered className='price-table'>
                            <thead>
                                <tr className='price-table-header-row'> {/* Add this class */}
                                    <th className='price-table-header'>Color / Clarity</th>
                                    {columnHeaders.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableCells("4.5")}
                            </tbody>
                        </Table>
                    </div>
                    <div>
                        <p className='price-title'>Giá Kim Cương 5ly4</p>
                        <Table bordered className='price-table'>
                            <thead>
                                <tr className='price-table-header-row'> {/* Add this class */}
                                    <th className='price-table-header'>Color / Clarity</th>
                                    {columnHeaders.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableCells("5.4")}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
