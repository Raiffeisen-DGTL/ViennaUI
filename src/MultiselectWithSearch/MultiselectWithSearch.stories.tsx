import { Story, Meta } from 'storybook';
import React, { useState, useCallback, FormEventHandler } from 'react';
import { MultiselectWithSearch, MultiselectWithSearchProps } from './MultiselectWithSearch';
import { Spinner } from '../Spinner';
import { debounce } from '../Utils';
import { Groups } from '../Groups';
import { SelectServiceType } from '../Utils/useMultiselect';
import { Button } from '../Button';
import { FaceSmileIcon } from 'vienna.icons';
import { P } from '../Typography/Typography';
import { Modal } from '@/Modal';
import { Input } from '@/Input';

const defaultOptions = [
    'Значение 1',
    'Значение большое 2',
    'Значение еще больше 3',
    'Знач. 4',
    'Значение 5',
    'Значение 6',
    'Значение 7',
    'Значение 8',
    'Значение 9',
    'Значение 10',
    'Значение 11',
    'Значение большое 12',
    'Значение еще больше 13',
    'Знач. 14',
];
const manyOptions = [...Array(100)].map((_, idx) => 'Значение ' + `${idx + 1}`);
export default {
    title: 'Development/MultiselectWithSearch',
    component: MultiselectWithSearch,
    args: {
        placeholder: 'Выберите значение',
        options: defaultOptions,
    },
    argTypes: {
        design: {
            control: 'select',
        },
        size: {
            control: 'select',
        },
        disabled: {
            control: 'boolean',
        },
        id: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        className: {
            control: 'text',
        },
        tabIndex: {
            control: 'number',
        },
        invalid: {
            control: 'boolean',
        },
        maxListHeight: {
            control: 'number',
        },
        maxListWidth: {
            control: 'number',
        },
        fitOptions: {
            control: 'boolean',
        },
        disableSearch: {
            control: 'boolean',
        },
        disableSelectAll: {
            control: 'boolean',
        },
        disableReset: {
            control: 'boolean',
        },
        disableClearSearch: {
            control: 'boolean',
        },
        tagsWrap: {
            control: 'boolean',
        },
        minViewItems: {
            control: 'number',
        },
        fixed: {
            control: 'boolean',
        },
        align: {
            control: 'select',
        },
        readonly: {
            control: 'boolean',
        },
        hideCheckboxes: {
            control: 'boolean',
        },
        showAddButton: {
            control: 'boolean',
        },
        addButtonDuplication: {
            control: 'boolean',
        },
        prefix: {
            control: false,
        },
        postfix: {
            control: false,
        },
        onSelect: {
            action: 'selected',
        },
        onSearch: {
            action: 'search',
        },
        children: {
            control: false,
        },
        ref: {
            control: false,
        },
        key: {
            control: false,
        },
        addButtonOnClick: {
            control: false,
        },
    },
    parameters: {
        docs: {
            source: {
                type: 'code',
            },
        },
    },
} as Meta;

type MultiselectOnSelect<T> = NonNullable<MultiselectWithSearchProps<T>['onSelect']>;
type MultiselectOnSearch<T> = NonNullable<MultiselectWithSearchProps<T>['onSearch']>;
type ValueType = string;
type Props = MultiselectWithSearchProps<ValueType>;

export const Overview: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleBlur = (event: React.FocusEvent) => {
        console.log('event in multiselectwithsearch', event);
    };
    return (
        <MultiselectWithSearch
            {...args}
            name={'Overview'}
            values={values}
            onSelect={handleSelect}
            onBlur={handleBlur}
            testId={{
                tag: (val) => `tag-${val}`,
                option: (val) => `opt-${val}`,
                search: 'search',
            }}
        />
    );
};

export const WithLoading: Story<Props> = (args: Props) => {
    const mockFetch = async (search: string): Promise<ValueType[]> => {
        return new Promise<ValueType[]>((res) => {
            setTimeout(() => {
                const str = search.trim();
                res(defaultOptions.map((opt) => (str ? `${str} ${opt}` : opt)));
            }, 2000);
        });
    };

    const [values, setValues] = useState<ValueType[]>(['test1', 'test2']);
    const [options, setOptions] = useState<ValueType[]>([]);
    const [sending, setSending] = useState<boolean>(false);

    const debounceRequest = debounce(async (str: string) => {
        setSending(true);
        setOptions(await mockFetch(str));
        setSending(false);
    }, 500);

    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleSearch: MultiselectOnSearch<ValueType> = useCallback((str) => {
        if (str.trim()) {
            debounceRequest(str);
        }
    }, []);

    const loadingPostfix = { up: <Spinner /> };
    const postfix = sending ? loadingPostfix : undefined;

    return (
        <MultiselectWithSearch
            {...args}
            name={'select'}
            disableSearch
            values={values}
            options={options}
            postfix={postfix}
            onSelect={handleSelect}
            onSearch={handleSearch}
        />
    );
};
WithLoading.storyName = 'Лоадер';

export const WithoutIcon: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>(['test']);

    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);

    return (
        <MultiselectWithSearch
            {...args}
            name={'withoutIcon'}
            values={values}
            hideEmptyStateIcon={true}
            onSelect={handleSelect}
        />
    );
};
WithoutIcon.storyName = 'WithoutIcon';

export const Adaptive: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);

    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);

    return <MultiselectWithSearch {...args} values={values} onSelect={handleSelect} />;
};
Adaptive.storyName = 'Адаптив';
Adaptive.args = {
    size: { xl: 'xl', l: 'l', m: 'm', s: 's', xs: 'xs' },
};

export const ManyOptions: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);

    return (
        <MultiselectWithSearch
            {...args}
            options={manyOptions}
            name={'select'}
            values={values}
            onSelect={handleSelect}
        />
    );
};

export const CheckIconSize: Story<Props> = (args: Props) => {
    const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'] satisfies MultiselectWithSearchProps<ValueType>['size'][];
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    return (
        <Groups design='vertical'>
            {sizes.map((size) => (
                <MultiselectWithSearch
                    {...args}
                    name={'select'}
                    values={values}
                    onSelect={handleSelect}
                    size={size}
                    key={size}
                />
            ))}
        </Groups>
    );
};
export const SetFocus: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleBlur = (event: React.FocusEvent) => {
        console.log('event in multiselectwithsearch', event);
    };

    const controlsRef = React.useRef<SelectServiceType | null>(null);
    const focus = () => controlsRef.current?.focus();
    const blur = () => {
        focus();
        controlsRef.current && setTimeout(controlsRef.current.blur, 1000);
    };

    return (
        <>
            <Groups>
                <Button design='accent' onClick={focus}>
                    Focus
                </Button>
                <Button design='primary' onClick={blur}>
                    Focus and Blur after sec
                </Button>
            </Groups>
            <hr />

            <MultiselectWithSearch
                {...args}
                disableSearch
                name={'Overview'}
                values={values}
                onSelect={handleSelect}
                onBlur={handleBlur}
                testId={{
                    tag: (val) => `tag-${val}`,
                    option: (val) => `opt-${val}`,
                    search: 'search',
                }}
                controlsRef={controlsRef}
            />
        </>
    );
};
SetFocus.storyName = 'Программная установка и снятие фокуса';

export const WithDataKey: Story<Props> = (args: Props) => {
    interface OptionType {
        id: number;
        name: string;
    }
    const [options,] = React.useState<OptionType[]>([
        {
            id: 1,
            name: 'Иванов Иван',
        },
        {
            id: 2,
            name: 'Иванов Иван',
        },
    ]);
    const [values, setValues] = React.useState<OptionType[]>([]);

    const handleSelect: MultiselectOnSelect<OptionType> = ({ value }) => setValues(value);

    return (
        <MultiselectWithSearch
            options={options}
            values={values}
            placeholder={'Выберите значение'}
            valueToString={(opt) => opt.name}
            compare={(opt) => String(opt.id)}
            dataKey={(opt) => opt.id}
            onSelect={handleSelect}
        />
    );
};

WithDataKey.storyName = 'Пример с dataKey';

export const ViewOnly: Story<MultiselectWithSearchProps> = (args) => {
    return <MultiselectWithSearch viewOnly values={['test1', 'test2']} />;
};

export const MultiselectWithHideCheckboxes: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleBlur = (event: React.FocusEvent) => {
        console.log('event in multiselectwithsearch', event);
    };
    return (
        <MultiselectWithSearch
            {...args}
            disableSearch
            name={'Overview'}
            values={values}
            onSelect={handleSelect}
            onBlur={handleBlur}
            hideCheckboxes
            testId={{
                tag: (val) => `tag-${val}`,
                option: (val) => `opt-${val}`,
                search: 'search',
            }}
        />
    );
};

export const MultiselectDynamicPopover: Story<Props> = (args: Props) => {
    interface OptionsItemType {
        value: string;
        popoverContent: {
            header: React.ReactNode;
            content: React.ReactNode;
        } | null;
        loading: boolean;
    }

    const [values, setValues] = useState<ValueType[]>(['Значение 1']);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const [optionsList, setOptionsList] = useState<OptionsItemType[]>([
        {
            value: 'Значение 1',
            popoverContent: null,
            loading: false,
        },
        {
            value: 'Значение 2',
            popoverContent: null,
            loading: false,
        },
        {
            value: 'Значение 3',
            popoverContent: null,
            loading: false,
        },
    ]);

    const updateOption = (option: OptionsItemType, data: Partial<OptionsItemType>) => {
        setOptionsList((prev) => {
            return prev.map((opt) => (option.value === opt.value ? { ...opt, ...data } : opt));
        });
    };

    const fetchPopoverData = async (option: OptionsItemType) =>
        new Promise((res) => {
            setTimeout(() => {
                updateOption(option, {
                    popoverContent: { header: option.value || '', content: 'Content ' + option.value },
                });
                res('');
            }, 2000);
        });

    const tagMouseOver = async (option: OptionsItemType) => {
        if (!option.popoverContent) {
            updateOption(option, { loading: true });
            await fetchPopoverData(option);
            updateOption(option, { loading: false });
        }
    };

    return (
        <MultiselectWithSearch values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
            {optionsList.map((option) => (
                <MultiselectWithSearch.Option
                    key={option.value}
                    popoverProps={{
                        action: 'hover',
                        noClose: true,
                        showPopoverWithArrow: true,
                        placement: 'bottom',
                        ...((option.popoverContent || option.loading) && {
                            header: option.popoverContent?.header,
                            content: option.popoverContent?.content || <Spinner />,
                        }),
                    }}
                    tagMouseOver={() => {
                        tagMouseOver(option);
                    }}>
                    {option.value}
                </MultiselectWithSearch.Option>
            ))}
        </MultiselectWithSearch>
    );
};

export const WithTagsInput: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleBlur = (event: React.FocusEvent) => {
        console.log('event in multiselectwithsearch', event);
    };
    const [options, setOptions] = useState<ValueType[]>(defaultOptions);

    return (
        <MultiselectWithSearch
            {...args}
            name={'Overview'}
            values={values}
            options={options}
            onSelect={handleSelect}
            onBlur={handleBlur}
            onAddValue={(newOption: ValueType) => {
                if (!options.includes(newOption) && !values.includes(newOption)) {
                    console.log('newOption ', newOption);
                    setOptions((prev) => [...prev, newOption]);
                    setValues((prev) => [...prev, newOption]);
                }
            }}
        />
    );
};

export const WithTagsInputNoOptions: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleBlur = (event: React.FocusEvent) => {
        console.log('event in multiselectwithsearch', event);
    };

    return (
        <MultiselectWithSearch
            hideOptionsList
            {...args}
            name={'Overview'}
            values={values}
            onSelect={handleSelect}
            onBlur={handleBlur}
            testId={{
                tag: (val) => `tag-${val}`,
                option: (val) => `opt-${val}`,
                search: 'search',
            }}
        />
    );
};

export const WithCheckboxOnRight: Story<Props> = (args: Props) => {
    const [values, setValues] = React.useState([]);
    const handleSelect = ({ value }) => setValues(value);

    return (
        <Groups design='vertical'>
            <P>Пункты меню размером S</P>
            <MultiselectWithSearch
                size='xs'
                values={values}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
                showCheckboxOnRight>
                <MultiselectWithSearch.Option value='Значение 1'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='s' /> Значение 1
                    </div>
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option value='Значение большое 2'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='s' /> Значение большое 2
                    </div>
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option value='Значение еще больше 3'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='s' /> Значение еще больше 3
                    </div>
                </MultiselectWithSearch.Option>
            </MultiselectWithSearch>
            <P>Пункты меню размером M</P>
            <MultiselectWithSearch
                size='m'
                values={values}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
                showCheckboxOnRight>
                <MultiselectWithSearch.Option value='Значение 1'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='m' /> Значение 1
                    </div>
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option value='Значение большое 2'>
                    {' '}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='m' /> Значение большое 2
                    </div>
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option value='Значение еще больше 3'>
                    {' '}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='m' /> Значение еще больше 3
                    </div>
                </MultiselectWithSearch.Option>
            </MultiselectWithSearch>
            <P>Пункты меню размером L</P>
            <MultiselectWithSearch
                size='xl'
                values={values}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
                showCheckboxOnRight>
                <MultiselectWithSearch.Option value='Значение 1'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='l' /> Значение 1
                    </div>
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option value='Значение большое 2'>
                    {' '}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='l' /> Значение большое 2
                    </div>
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option value='Значение еще больше 3'>
                    {' '}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaceSmileIcon size='l' /> Значение еще больше 3
                    </div>
                </MultiselectWithSearch.Option>
            </MultiselectWithSearch>
        </Groups>
    );
};

export const MultiselectWithSyncPaddings: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const multiSelectSizes = [
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
    ] satisfies MultiselectWithSearchProps<ValueType>['size'][];
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);

    return (
        <Groups design='vertical'>
            {multiSelectSizes.map((size) => (
                <MultiselectWithSearch
                    {...args}
                    key={size}
                    disableSearch
                    name={'Overview'}
                    values={values}
                    size={size}
                    onSelect={handleSelect}
                />
            ))}
        </Groups>
    );
};

export const WithAddButton: Story<Props> = (args: Props) => {
    interface OptionType {
        id: number;
        label: string;
    }
    const [options, setOptions] = React.useState<OptionType[]>([
        {
            id: 1,
            label: 'Значение 1',
        },
        {
            id: 2,
            label: 'Значение 2',
        },
        {
            id: 3,
            label: 'Значение 3',
        },
        {
            id: 4,
            label: 'Значение 4',
        },
    ]);
    const [values, setValues] = React.useState<OptionType[]>([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleSelect: MultiselectOnSelect<OptionType> = ({ value }) => setValues(value);
    const handleAddButtonClick: MultiselectWithSearchProps['addButtonOnClick'] = (searchString) => {
        setInputValue(searchString);
        setIsOpen(true);
    };
    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        const newOption = { id: Date.now(), label: inputValue };
        setOptions((prev) => [...prev, newOption]);
        setIsOpen(false);
        setInputValue('');
        setValues((prev) => [...prev, newOption]);
    };
    return (
        <div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onAfterOpen={() => inputRef.current?.focus()}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Добавить опцию</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <Groups design={'vertical'}>
                                <Input
                                    ref={inputRef}
                                    placeholder={'Новое значение'}
                                    value={inputValue}
                                    required
                                    onChange={({ value }) => setInputValue(value)}
                                />
                                <Button type={'submit'} size='l' design='outline'>
                                    Сохранить
                                </Button>
                            </Groups>
                        </form>
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
            <MultiselectWithSearch
                options={options}
                values={values}
                name={'add-button'}
                placeholder={'Выберите значение'}
                showAddButton
                addButtonDuplication
                valueToString={(opt) => opt.label}
                compare={(opt) => String(opt.id)}
                onSelect={handleSelect}
                addButtonOnClick={handleAddButtonClick}
            />
        </div>
    );
};

export const MultiSelectFixPrefix: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleBlur = (event: React.FocusEvent) => {
        console.log('event in multiselectwithsearch', event);
    };
    return (
        <MultiselectWithSearch
            {...args}
            name={'Overview'}
            values={values}
            prefix={<FaceSmileIcon />}
            onSelect={handleSelect}
            onBlur={handleBlur}
            testId={{
                tag: (val) => `tag-${val}`,
                option: (val) => `opt-${val}`,
                search: 'search',
            }}
        />
    );
};

export const MultiSelectFixMarginLeftWithinTags: Story<Props> = (args: Props) => {
    const [values, setValues] = useState<ValueType[]>([]);
    const handleSelect: MultiselectOnSelect<ValueType> = ({ value }) => setValues(value);
    const handleBlur = (event: React.FocusEvent) => {
        console.log('event in multiselectwithsearch', event);
    };
    return (
        <MultiselectWithSearch
            {...args}
            name={'Overview'}
            values={values}
            tagsWrap
            onSelect={handleSelect}
            onBlur={handleBlur}
            testId={{
                tag: (val) => `tag-${val}`,
                option: (val) => `opt-${val}`,
                search: 'search',
            }}
        />
    );
};
