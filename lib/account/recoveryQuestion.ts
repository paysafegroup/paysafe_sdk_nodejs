import { GenericObject } from '../generic'

export class RecoveryQuestion extends GenericObject {
  question: string
  questionId: string
  answer: string

  constructor(resp) {
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

  setQuestion(question) {
    this.question = question
  }

  getQuestion() {
    return this.question
  }

  setQuestionId(questionId) {
    this.questionId = questionId
  }

  getQuestionId() {
    return this.questionId
  }

  setAnswer(answer) {
    this.answer = answer
  }

  getAnswer() {
    return this.answer
  }
}
