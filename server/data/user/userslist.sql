SELECT [User].[IdUser]
		,[Surname]
		,[User].[Name]
		,[Patronymic]
		,[Photo]
		,[Login]
		,[Password]
		,[IdRole]
		,COUNT([Application].[IdApplication]) as 'Count'
FROM [dbo].[user]
LEFT JOIN [Application] ON [Application].IdUser = [User].IdUser
GROUP BY [User].IdUser, [Surname], [User].[Name], [Patronymic], [Photo], [Login], [Password], [IdRole]
