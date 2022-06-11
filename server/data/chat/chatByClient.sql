Select Chat.IdChat, Chat.[Date], Chat.[Text],
 Client.Surname + ' ' + Client.[Name] as "Client" from [dbo].[Chat] Inner join Client on Client.IdClient = Chat.IdClient 
 WHERE Chat.IdClient=@IdClient