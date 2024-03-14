import React, { useEffect, useState, FC } from 'react';
import { Like, Dislike, CheckmarkFilled } from 'vienna.icons';
import { color } from 'vienna.tokens';
import { Form, DescriptionWrapper } from './FeedbackSection.styles';
import { Flex } from '../Flex';
import { Text } from '../Typography';
import { Button } from '../Button';
import { Textarea, TextareaProps } from '../Textarea';
import { FormField } from '../FormField';
import { useForm } from '../Utils/useForm';

export interface FeedbackSectionLang {
    title?: string;
    textareaPositivePlaceholder?: string;
    textareaNegativePlaceholder?: string;
    textareaNegativeValidateMessage?: string;
    description?: string | React.ReactNode;
    buttonText?: string;
    successText?: string;
}

export interface FeedbackSectionState {
    useful: boolean | undefined;
    comment: string;
}

export interface FeedbackSectionProps {
    state?: FeedbackSectionState;
    lang?: FeedbackSectionLang;
    onSubmit?: (
        data: FeedbackSectionState,
        resolve: (value: unknown) => void,
        reject: (reason?: any) => void
    ) => Promise<void> | void;
}

export const FeedbackSection: FC<FeedbackSectionProps> = (props) => {
    const lang: Required<FeedbackSectionLang> = {
        title: 'Была ли статья полезна?',
        textareaPositivePlaceholder: 'А как сделать еще лучше?',
        textareaNegativePlaceholder: 'Чего не хватило?',
        textareaNegativeValidateMessage: 'Укажите комментарий',
        description:
            'Эта форма — только для обратной связи. Не оставляйте здесь персональные данные или информацию об учетных записях.',
        buttonText: 'Отправить отзыв',
        successText: 'Спасибо, что делаете нас лучше!',
        ...props.lang,
    };

    const [success, setSuccess] = useState<boolean>(false);
    const { state, setPartialState, validationObject, submitForm, sending } = useForm<FeedbackSectionState>(
        props.state || {
            useful: undefined,
            comment: '',
        },
        {
            comment: () => {
                if (state.useful === false && !state.comment.trim()) {
                    return lang.textareaNegativeValidateMessage;
                }
                return '';
            },
        },
        props.onSubmit,
        () => setSuccess(true)
    );

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await submitForm();
    };

    const textareaPlaceholder =
        state.useful === true ? lang.textareaPositivePlaceholder : lang.textareaNegativePlaceholder;

    const yesClickHandler = () => {
        setPartialState({ useful: true });
    };

    const noClickHandler = () => {
        setPartialState({ useful: false });
    };

    const commentChangeHandler: TextareaProps['onChange'] = (event, data) => {
        setPartialState({ comment: data?.value || '' });
    };

    useEffect(() => {
        if (props.state) {
            setPartialState(props.state);
        }
    }, [props.state]);

    return (
        <section>
            {success ? (
                <Flex alignItems={'center'} gap={'s3'}>
                    <CheckmarkFilled color={color.utilitarian.geneva.c100} />
                    <Text size={'xxl'} weight={'medium'}>
                        {lang.successText}
                    </Text>
                </Flex>
            ) : (
                <>
                    <Flex alignItems={'center'} gap={'s5'} wrap={'wrap'}>
                        <Text size={'xxl'} weight={'medium'}>
                            {lang.title}
                        </Text>
                        <Flex alignItems={'center'} gap={'s4'}>
                            <Button design={state.useful === true ? 'accent' : 'outline'} onClick={yesClickHandler}>
                                <Like />
                                Да
                            </Button>
                            <Button design={state.useful === false ? 'accent' : 'outline'} onClick={noClickHandler}>
                                <Dislike />
                                Нет
                            </Button>
                        </Flex>
                    </Flex>
                    {state.useful !== undefined && (
                        <Form onSubmit={submitHandler}>
                            <FormField>
                                <Textarea
                                    value={state.comment}
                                    placeholder={textareaPlaceholder}
                                    rows={5}
                                    maxLength={5000}
                                    invalid={validationObject.comment.error}
                                    resize
                                    showCounter
                                    onChange={commentChangeHandler}
                                />
                                {validationObject.comment.error && validationObject.comment.msg && (
                                    <FormField.Message color='critical'>
                                        {validationObject.comment.msg}
                                    </FormField.Message>
                                )}
                            </FormField>
                            <DescriptionWrapper>
                                <Flex.Item>
                                    <Button type='submit' design='accent' loading={sending}>
                                        {lang.buttonText}
                                    </Button>
                                </Flex.Item>
                                <Text size={'m'}>{lang.description}</Text>
                            </DescriptionWrapper>
                        </Form>
                    )}
                </>
            )}
        </section>
    );
};

FeedbackSection.displayName = 'FeedbackSection';
