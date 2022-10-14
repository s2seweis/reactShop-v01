<Formik
      htmlFor="amazing"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => this.handleSubmit(values)}
    >
      {({ errors, touched, setFieldValue }) => (
        //define setFieldValue
        <Form id="amazing">
          <Grid>
            <Grid.Column>
              <Label>Industry</Label>
              <Field
                id="industry" // remove onBlur warning
                name="industry"
                as={Select}
                options={nameOptions}
                placeholder="select an industry"
                onChange={(e, selected) =>
                  setFieldValue("industry", selected.value)
                }
              />

              <div>
                {touched.industry && errors.industry
                  ? errors.industry
                  : null}
              </div>
            </Grid.Column>
          </Grid>
        </Form>
      )}
    </Formik>