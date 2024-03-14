# CustomTable

Компоненты кастомной таблицы можно использовать не прибегая к помощи сторонних библиотек. Достаточно собрать компоненты вместе.


## Импорт

```
import { CustomTable } from 'vienna-ui';
```

## Использование

```
 {() => {
        const data = [
            {
                id: 0,
                firstName: 'John',
                lastName: 'Doe',
                position: 'Software Engineer',
                phone: '9163456789',
                level: 1,
            },
            {
                id: 1,
                firstName: 'Johnnie',
                lastName: 'Walker',
                position: 'Software Engineer',
                phone: 'none',
                level: 2,
            },
            {
                id: 2,
                firstName: 'James',
                lastName: 'Jameson',
                position: 'CTO',
                phone: '916456789',
                level: 2,
            },
        ];
        return (
            <CustomTable>
                <CustomTable.Head>
                    <CustomTable.Row>
                        <CustomTable.Header>
                            Name
                        </CustomTable.Header>
                        <CustomTable.Header>
                            Surname
                        </CustomTable.Header>
                        <CustomTable.Header>
                            Position
                        </CustomTable.Header>
                        <CustomTable.Header>
                            Phone
                        </CustomTable.Header>
                    </CustomTable.Row>
                </CustomTable.Head>
                <CustomTable.Body>
                    {data.map(row => (
                        <CustomTable.Row key={row.id}>
                            <CustomTable.Data>
                                {row.firstName}
                            </CustomTable.Data>
                            <CustomTable.Data>
                                {row.lastName}
                            </CustomTable.Data>
                            <CustomTable.Data>
                                {row.position}
                            </CustomTable.Data>
                            <CustomTable.Data>
                                {row.phone}
                            </CustomTable.Data>
                        </CustomTable.Row>
                    ))}
                </CustomTable.Body>
            </CustomTable>
        );
    }}
```
