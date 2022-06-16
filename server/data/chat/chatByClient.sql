Select Chat.IdChat, Chat.Photo as Photo, Chat.[Date], Chat.[Text],
 Client.Surname + ' ' + Client.[Name] as "Client", Client.Photo from [dbo].[Chat]
  Inner join Client on Client.IdClient = Chat.IdClient 
 WHERE Chat.IdClient=@IdClient