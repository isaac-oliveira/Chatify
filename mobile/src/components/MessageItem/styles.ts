import styled from 'styled-components/native';

export const MessageContainer = styled.View`
	padding-vertical: 10px;
	padding-horizontal: 15px;
	margin: 10px;
	border-radius: 8px;
`;

export const MessageSendContainer = styled(MessageContainer)`
	background-color: ${({ theme }) => theme.colors.messageSend};
	align-self: flex-end;
`;

export const MessageSendText = styled.Text``;

export const MessageReceiveContainer = styled(MessageContainer)`
	background-color: ${({ theme }) => theme.colors.messageRecieve};
	align-self: flex-start;
`;

export const MessageReceiveText = styled.Text``;
