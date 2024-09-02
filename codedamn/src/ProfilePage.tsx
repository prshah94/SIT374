import React from 'react';
import logo from './logo.svg';
import './ProfilePage.css';

function ProfilePage() {
    return (
        <div className="ProfilePage">
                <h2>Profile Details</h2>
                <div className="card">
                    <div className="card-body">
                        <i className="fa fa-pen fa-xs edit"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td>ImDezCode</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>imdezcode@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>:</td>
                                    <td>Bali, Indonesia</td>
                                </tr>
                                <tr>
                                    <td>Hobbies</td>
                                    <td>:</td>
                                    <td>Diving, Reading Book</td>
                                </tr>
                                <tr>
                                    <td>Job</td>
                                    <td>:</td>
                                    <td>Web Developer</td>
                                </tr>
                                <tr>
                                    <td>Skill</td>
                                    <td>:</td>
                                    <td>PHP, HTML, CSS, Java</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
    );
}

export default ProfilePage;
