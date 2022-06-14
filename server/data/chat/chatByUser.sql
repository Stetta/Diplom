SELECT T1.IdChat, T1.[Text], T1.Photo, T1.IdApplication, T1.[Date], ISNULL(T2.Surname, T3.Surname) AS UserSurname, ISNULL(T2.Name, T3.Name) AS UserName, ISNULL(T2.Photo, T3.Photo) as UserPhoto, ISNULL(T2.Mail, T3.Login) as UserEmail
FROM Chat T1
LEFT JOIN Client T2 ON T1.IdClient = T2.IdClient
LEFT JOIN [User] T3 ON T1.IdUser = T3.IdUser
WHERE T1.IdApplication=@IdApplication