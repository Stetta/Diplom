INSERT INTO [dbo].[chat]
    (
        [Date],
        [IdUser],
        [IdClient],
        [IdApplication],
        [Text],
        [Photo]
    )
VALUES (
    @Date,
    @IdUser,
    @IdClient,
    @IdApplication,
    @Text,
    @Photo
)