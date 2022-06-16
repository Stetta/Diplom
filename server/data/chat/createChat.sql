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
    CURRENT_TIMESTAMP,
    @IdUser,
    @IdClient,
    @IdApplication,
    @Text,
    @Photo
)