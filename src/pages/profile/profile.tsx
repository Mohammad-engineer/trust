import React, { useState } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';

export default function Profile() {
  const [notes, setNotes] = useState(
    'ساندرا یک CPA است و از سال 2008 کنترل کننده ما بوده است. او عاشق تعامل با کارکنان است، بنابراین اگر او را ندیده اید، حتماً سلام کنید.\r\n\r\nساندرا 2 دختر دارد که هر دو ژیمناست های ماهر هستند.'
  );
  const employee = {
    ID: 7,
    FirstName: 'محمد امین',
    LastName: 'نجفی',
    Prefix: 'آقا',
    Position: 'برنامه نویس',
    Picture: 'images/employees/06.png',
    BirthDate: new Date('1974/11/5'),
    HireDate: new Date('2005/05/11'),
    Notes: notes,
    Address: 'تهران'
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>پروفایل من</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${
              employee.Picture
            }`}
          />
        </div>
        <span>{notes}</span>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
