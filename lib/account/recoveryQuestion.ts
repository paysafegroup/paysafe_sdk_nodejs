import { GenericObject, IGenericObject } from '../generic'

export interface IRecoveryQuestion extends IGenericObject {
  question?: string
  questionId?: string
  answer?: string
}

export class RecoveryQuestion extends GenericObject {
  question: string
  questionId: string
  answer: string

  constructor(resp?: IRecoveryQuestion) {
    super(resp)

    if (resp) {
      if (resp.question) {
        this.question = resp.question
      }
      if (resp.questionId) {
        this.questionId = resp.questionId
      }
      if (resp.answer) {
        this.answer = resp.answer
      }
    }
  }

  setQuestion(question: string) {
    this.question = question
  }

  getQuestion() {
    return this.question
  }

  setQuestionId(questionId: string) {
    this.questionId = questionId
  }

  getQuestionId() {
    return this.questionId
  }

  setAnswer(answer: string) {
    this.answer = answer
  }

  getAnswer() {
    return this.answer
  }
}
